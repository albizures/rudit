import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увериться: PerfectVerb = {
  name: Word('увериться', 2),
  singular1stPerson: Word('уверюсь', 2),
  singular2ndPerson: Word('уверишься', 2),
  singular3rdPerson: Word('уверится', 2),
  plural1stPerson: Word('уверимся', 2),
  plural2ndPerson: Word('уверитесь', 2),
  plural3rdPerson: Word('уверятся', 2),
  masculinePast: Word('уверился', 2),
  femininePast: Word('уверилась', 2),
  neuterPast: Word('уверилось', 2),
  pluralPast: Word('уверились', 2),
  imperativeInformal: Word('уверься', 2),
  imperativeFormal: Word('уверьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(увериться.name.text, увериться);

export { увериться };