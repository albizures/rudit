import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набрасывать: PerfectVerb = {
  name: Word('набрасывать', 4),
  singular1stPerson: Word('набрасываю', 4),
  singular2ndPerson: Word('набрасываешь', 4),
  singular3rdPerson: Word('набрасывает', 4),
  plural1stPerson: Word('набрасываем', 4),
  plural2ndPerson: Word('набрасываете', 4),
  plural3rdPerson: Word('набрасывают', 4),
  masculinePast: Word('набрасывал', 4),
  femininePast: Word('набрасывала', 4),
  neuterPast: Word('набрасывало', 4),
  pluralPast: Word('набрасывали', 4),
  imperativeInformal: Word('набрасывай', 4),
  imperativeFormal: Word('набрасывайте', 4),
  imperfect: [],
};

perfectVerbs.set(набрасывать.name.text, набрасывать);

export { набрасывать };