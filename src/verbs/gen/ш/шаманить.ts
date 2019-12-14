import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шаманить: PerfectVerb = {
  name: Word('шаманить', 3),
  singular1stPerson: Word('шаманю', 3),
  singular2ndPerson: Word('шаманишь', 3),
  singular3rdPerson: Word('шаманит', 3),
  plural1stPerson: Word('шаманим', 3),
  plural2ndPerson: Word('шаманите', 3),
  plural3rdPerson: Word('шаманят', 3),
  masculinePast: Word('шаманил', 3),
  femininePast: Word('шаманила', 3),
  neuterPast: Word('шаманило', 3),
  pluralPast: Word('шаманили', 3),
  imperativeInformal: Word('шамань', 3),
  imperativeFormal: Word('шаманьте', 3),
  imperfect: [],
};

perfectVerbs.set(шаманить.name.text, шаманить);

export { шаманить };