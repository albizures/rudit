import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const довериться: PerfectVerb = {
  name: Word('довериться', 3),
  singular1stPerson: Word('доверюсь', 3),
  singular2ndPerson: Word('доверишься', 3),
  singular3rdPerson: Word('доверится', 3),
  plural1stPerson: Word('доверимся', 3),
  plural2ndPerson: Word('доверитесь', 3),
  plural3rdPerson: Word('доверятся', 3),
  masculinePast: Word('доверился', 3),
  femininePast: Word('доверилась', 3),
  neuterPast: Word('доверилось', 3),
  pluralPast: Word('доверились', 3),
  imperativeInformal: Word('доверься', 3),
  imperativeFormal: Word('доверьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(довериться.name.text, довериться);

export { довериться };