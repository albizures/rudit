import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изнашиваться: PerfectVerb = {
  name: Word('изнашиваться', 3),
  singular1stPerson: Word('изнашиваюсь', 3),
  singular2ndPerson: Word('изнашиваешься', 3),
  singular3rdPerson: Word('изнашивается', 3),
  plural1stPerson: Word('изнашиваемся', 3),
  plural2ndPerson: Word('изнашиваетесь', 3),
  plural3rdPerson: Word('изнашиваются', 3),
  masculinePast: Word('изнашивался', 3),
  femininePast: Word('изнашивалась', 3),
  neuterPast: Word('изнашивалось', 3),
  pluralPast: Word('изнашивались', 3),
  imperativeInformal: Word('изнашивайся', 3),
  imperativeFormal: Word('изнашивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(изнашиваться.name.text, изнашиваться);

export { изнашиваться };