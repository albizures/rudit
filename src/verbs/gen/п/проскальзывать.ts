import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проскальзывать: PerfectVerb = {
  name: Word('проскальзывать', 5),
  singular1stPerson: Word('проскальзываю', 5),
  singular2ndPerson: Word('проскальзываешь', 5),
  singular3rdPerson: Word('проскальзывает', 5),
  plural1stPerson: Word('проскальзываем', 5),
  plural2ndPerson: Word('проскальзываете', 5),
  plural3rdPerson: Word('проскальзывают', 5),
  masculinePast: Word('проскальзывал', 5),
  femininePast: Word('проскальзывала', 5),
  neuterPast: Word('проскальзывало', 5),
  pluralPast: Word('проскальзывали', 5),
  imperativeInformal: Word('проскальзывай', 5),
  imperativeFormal: Word('проскальзывайте', 5),
  imperfect: [],
};

perfectVerbs.set(проскальзывать.name.text, проскальзывать);

export { проскальзывать };