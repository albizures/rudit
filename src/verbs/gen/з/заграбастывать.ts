import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заграбастывать: PerfectVerb = {
  name: Word('заграбастывать', 6),
  singular1stPerson: Word('заграбастываю', 6),
  singular2ndPerson: Word('заграбастываешь', 6),
  singular3rdPerson: Word('заграбастывает', 6),
  plural1stPerson: Word('заграбастываем', 6),
  plural2ndPerson: Word('заграбастываете', 6),
  plural3rdPerson: Word('заграбастывают', 6),
  masculinePast: Word('заграбастывал', 6),
  femininePast: Word('заграбастывала', 6),
  neuterPast: Word('заграбастывало', 6),
  pluralPast: Word('заграбастывали', 6),
  imperativeInformal: Word('заграбастывай', 6),
  imperativeFormal: Word('заграбастывайте', 6),
  imperfect: [],
};

perfectVerbs.set(заграбастывать.name.text, заграбастывать);

export { заграбастывать };