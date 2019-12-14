import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всхлипывать: PerfectVerb = {
  name: Word('всхлипывать', 4),
  singular1stPerson: Word('всхлипываю', 4),
  singular2ndPerson: Word('всхлипываешь', 4),
  singular3rdPerson: Word('всхлипывает', 4),
  plural1stPerson: Word('всхлипываем', 4),
  plural2ndPerson: Word('всхлипываете', 4),
  plural3rdPerson: Word('всхлипывают', 4),
  masculinePast: Word('всхлипывал', 4),
  femininePast: Word('всхлипывала', 4),
  neuterPast: Word('всхлипывало', 4),
  pluralPast: Word('всхлипывали', 4),
  imperativeInformal: Word('всхлипывай', 4),
  imperativeFormal: Word('всхлипывайте', 4),
  imperfect: ['всхлипнуть'],
};

perfectVerbs.set(всхлипывать.name.text, всхлипывать);

export { всхлипывать };