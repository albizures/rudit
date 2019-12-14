import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загораться: PerfectVerb = {
  name: Word('загораться', 5),
  singular1stPerson: Word('загораюсь', 5),
  singular2ndPerson: Word('загораешься', 5),
  singular3rdPerson: Word('загорается', 5),
  plural1stPerson: Word('загораемся', 5),
  plural2ndPerson: Word('загораетесь', 5),
  plural3rdPerson: Word('загораются', 5),
  masculinePast: Word('загорался', 5),
  femininePast: Word('загоралась', 5),
  neuterPast: Word('загоралось', 5),
  pluralPast: Word('загорались', 5),
  imperativeInformal: Word('загорайся', 5),
  imperativeFormal: Word('загорайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(загораться.name.text, загораться);

export { загораться };