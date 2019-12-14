import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высекать: PerfectVerb = {
  name: Word('высекать', 5),
  singular1stPerson: Word('высекаю', 5),
  singular2ndPerson: Word('высекаешь', 5),
  singular3rdPerson: Word('высекает', 5),
  plural1stPerson: Word('высекаем', 5),
  plural2ndPerson: Word('высекаете', 5),
  plural3rdPerson: Word('высекают', 5),
  masculinePast: Word('высекал', 5),
  femininePast: Word('высекала', 5),
  neuterPast: Word('высекало', 5),
  pluralPast: Word('высекали', 5),
  imperativeInformal: Word('высекай', 5),
  imperativeFormal: Word('высекайте', 5),
  imperfect: ['высечь'],
};

perfectVerbs.set(высекать.name.text, высекать);

export { высекать };