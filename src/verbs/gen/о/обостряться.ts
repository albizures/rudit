import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обостряться: PerfectVerb = {
  name: Word('обостряться', 6),
  singular1stPerson: Word('обостряюсь', 6),
  singular2ndPerson: Word('обостряешься', 6),
  singular3rdPerson: Word('обостряется', 6),
  plural1stPerson: Word('обостряемся', 6),
  plural2ndPerson: Word('обостряетесь', 6),
  plural3rdPerson: Word('обостряются', 6),
  masculinePast: Word('обострялся', 6),
  femininePast: Word('обострялась', 6),
  neuterPast: Word('обострялось', 6),
  pluralPast: Word('обострялись', 6),
  imperativeInformal: Word('обостряйся', 6),
  imperativeFormal: Word('обостряйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(обостряться.name.text, обостряться);

export { обостряться };