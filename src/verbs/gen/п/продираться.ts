import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продираться: PerfectVerb = {
  name: Word('продираться', 6),
  singular1stPerson: Word('продираюсь', 6),
  singular2ndPerson: Word('продираешься', 6),
  singular3rdPerson: Word('продирается', 6),
  plural1stPerson: Word('продираемся', 6),
  plural2ndPerson: Word('продираетесь', 6),
  plural3rdPerson: Word('продираются', 6),
  masculinePast: Word('продирался', 6),
  femininePast: Word('продиралась', 6),
  neuterPast: Word('продиралось', 6),
  pluralPast: Word('продирались', 6),
  imperativeInformal: Word('продирайся', 6),
  imperativeFormal: Word('продирайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(продираться.name.text, продираться);

export { продираться };