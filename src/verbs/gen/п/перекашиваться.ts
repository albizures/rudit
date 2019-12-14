import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекашиваться: PerfectVerb = {
  name: Word('перекашиваться', 5),
  singular1stPerson: Word('перекашиваюсь', 5),
  singular2ndPerson: Word('перекашиваешься', 5),
  singular3rdPerson: Word('перекашивается', 5),
  plural1stPerson: Word('перекашиваемся', 5),
  plural2ndPerson: Word('перекашиваетесь', 5),
  plural3rdPerson: Word('перекашиваются', 5),
  masculinePast: Word('перекашивался', 5),
  femininePast: Word('перекашивалась', 5),
  neuterPast: Word('перекашивалось', 5),
  pluralPast: Word('перекашивались', 5),
  imperativeInformal: Word('перекашивайся', 5),
  imperativeFormal: Word('перекашивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перекашиваться.name.text, перекашиваться);

export { перекашиваться };