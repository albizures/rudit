import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заляпывать: PerfectVerb = {
  name: Word('заляпывать', 3),
  singular1stPerson: Word('заляпываю', 3),
  singular2ndPerson: Word('заляпываешь', 3),
  singular3rdPerson: Word('заляпывает', 3),
  plural1stPerson: Word('заляпываем', 3),
  plural2ndPerson: Word('заляпываете', 3),
  plural3rdPerson: Word('заляпывают', 3),
  masculinePast: Word('заляпывал', 3),
  femininePast: Word('заляпывала', 3),
  neuterPast: Word('заляпывало', 3),
  pluralPast: Word('заляпывали', 3),
  imperativeInformal: Word('заляпывай', 3),
  imperativeFormal: Word('заляпывайте', 3),
  imperfect: [],
};

perfectVerbs.set(заляпывать.name.text, заляпывать);

export { заляпывать };