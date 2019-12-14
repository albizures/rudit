import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашиваться: PerfectVerb = {
  name: Word('зашиваться', 5),
  singular1stPerson: Word('зашиваюсь', 5),
  singular2ndPerson: Word('зашиваешься', 5),
  singular3rdPerson: Word('зашивается', 5),
  plural1stPerson: Word('зашиваемся', 5),
  plural2ndPerson: Word('зашиваетесь', 5),
  plural3rdPerson: Word('зашиваются', 5),
  masculinePast: Word('зашивался', 5),
  femininePast: Word('зашивалась', 5),
  neuterPast: Word('зашивалось', 5),
  pluralPast: Word('зашивались', 5),
  imperativeInformal: Word('зашивайся', 5),
  imperativeFormal: Word('зашивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(зашиваться.name.text, зашиваться);

export { зашиваться };