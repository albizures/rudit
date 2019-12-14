import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укрывать: PerfectVerb = {
  name: Word('укрывать', 5),
  singular1stPerson: Word('укрываю', 5),
  singular2ndPerson: Word('укрываешь', 5),
  singular3rdPerson: Word('укрывает', 5),
  plural1stPerson: Word('укрываем', 5),
  plural2ndPerson: Word('укрываете', 5),
  plural3rdPerson: Word('укрывают', 5),
  masculinePast: Word('укрывал', 5),
  femininePast: Word('укрывала', 5),
  neuterPast: Word('укрывало', 5),
  pluralPast: Word('укрывали', 5),
  imperativeInformal: Word('укрывай', 5),
  imperativeFormal: Word('укрывайте', 5),
  imperfect: ['укрыть'],
};

perfectVerbs.set(укрывать.name.text, укрывать);

export { укрывать };