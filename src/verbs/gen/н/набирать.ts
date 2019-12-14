import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набирать: PerfectVerb = {
  name: Word('набирать', 5),
  singular1stPerson: Word('набираю', 5),
  singular2ndPerson: Word('набираешь', 5),
  singular3rdPerson: Word('набирает', 5),
  plural1stPerson: Word('набираем', 5),
  plural2ndPerson: Word('набираете', 5),
  plural3rdPerson: Word('набирают', 5),
  masculinePast: Word('набирал', 5),
  femininePast: Word('набирала', 5),
  neuterPast: Word('набирало', 5),
  pluralPast: Word('набирали', 5),
  imperativeInformal: Word('набирай', 5),
  imperativeFormal: Word('набирайте', 5),
  imperfect: ['набрать'],
};

perfectVerbs.set(набирать.name.text, набирать);

export { набирать };