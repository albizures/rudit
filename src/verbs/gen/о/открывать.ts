import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const открывать: PerfectVerb = {
  name: Word('открывать', 6),
  singular1stPerson: Word('открываю', 6),
  singular2ndPerson: Word('открываешь', 6),
  singular3rdPerson: Word('открывает', 6),
  plural1stPerson: Word('открываем', 6),
  plural2ndPerson: Word('открываете', 6),
  plural3rdPerson: Word('открывают', 6),
  masculinePast: Word('открывал', 6),
  femininePast: Word('открывала', 6),
  neuterPast: Word('открывало', 6),
  pluralPast: Word('открывали', 6),
  imperativeInformal: Word('открывай', 6),
  imperativeFormal: Word('открывайте', 6),
  imperfect: ['открыть'],
};

perfectVerbs.set(открывать.name.text, открывать);

export { открывать };