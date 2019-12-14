import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начерпать: PerfectVerb = {
  name: Word('начерпать', 3),
  singular1stPerson: Word('начерпаю', 3),
  singular2ndPerson: Word('начерпаешь', 3),
  singular3rdPerson: Word('начерпает', 3),
  plural1stPerson: Word('начерпаем', 3),
  plural2ndPerson: Word('начерпаете', 3),
  plural3rdPerson: Word('начерпают', 3),
  masculinePast: Word('начерпал', 3),
  femininePast: Word('начерпала', 3),
  neuterPast: Word('начерпало', 3),
  pluralPast: Word('начерпали', 3),
  imperativeInformal: Word('начерпай', 3),
  imperativeFormal: Word('начерпайте', 3),
  imperfect: [],
};

perfectVerbs.set(начерпать.name.text, начерпать);

export { начерпать };