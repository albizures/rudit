import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исчерпывать: PerfectVerb = {
  name: Word('исчерпывать', 3),
  singular1stPerson: Word('исчерпываю', 3),
  singular2ndPerson: Word('исчерпываешь', 3),
  singular3rdPerson: Word('исчерпывает', 3),
  plural1stPerson: Word('исчерпываем', 3),
  plural2ndPerson: Word('исчерпываете', 3),
  plural3rdPerson: Word('исчерпывают', 3),
  masculinePast: Word('исчерпывал', 3),
  femininePast: Word('исчерпывала', 3),
  neuterPast: Word('исчерпывало', 3),
  pluralPast: Word('исчерпывали', 3),
  imperativeInformal: Word('исчерпывай', 3),
  imperativeFormal: Word('исчерпывайте', 3),
  imperfect: [],
};

perfectVerbs.set(исчерпывать.name.text, исчерпывать);

export { исчерпывать };