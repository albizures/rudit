import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исчерпать: PerfectVerb = {
  name: Word('исчерпать', 3),
  singular1stPerson: Word('исчерпаю', 3),
  singular2ndPerson: Word('исчерпаешь', 3),
  singular3rdPerson: Word('исчерпает', 3),
  plural1stPerson: Word('исчерпаем', 3),
  plural2ndPerson: Word('исчерпаете', 3),
  plural3rdPerson: Word('исчерпают', 3),
  masculinePast: Word('исчерпал', 3),
  femininePast: Word('исчерпала', 3),
  neuterPast: Word('исчерпало', 3),
  pluralPast: Word('исчерпали', 3),
  imperativeInformal: Word('исчерпай', 3),
  imperativeFormal: Word('исчерпайте', 3),
  imperfect: [],
};

perfectVerbs.set(исчерпать.name.text, исчерпать);

export { исчерпать };