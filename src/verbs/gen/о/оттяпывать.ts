import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттяпывать: PerfectVerb = {
  name: Word('оттяпывать', 3),
  singular1stPerson: Word('оттяпываю', 3),
  singular2ndPerson: Word('оттяпываешь', 3),
  singular3rdPerson: Word('оттяпывает', 3),
  plural1stPerson: Word('оттяпываем', 3),
  plural2ndPerson: Word('оттяпываете', 3),
  plural3rdPerson: Word('оттяпывают', 3),
  masculinePast: Word('оттяпывал', 3),
  femininePast: Word('оттяпывала', 3),
  neuterPast: Word('оттяпывало', 3),
  pluralPast: Word('оттяпывали', 3),
  imperativeInformal: Word('оттяпывай', 3),
  imperativeFormal: Word('оттяпывайте', 3),
  imperfect: [],
};

perfectVerbs.set(оттяпывать.name.text, оттяпывать);

export { оттяпывать };