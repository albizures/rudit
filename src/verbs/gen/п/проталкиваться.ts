import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проталкиваться: PerfectVerb = {
  name: Word('проталкиваться', 4),
  singular1stPerson: Word('проталкиваюсь', 4),
  singular2ndPerson: Word('проталкиваешься', 4),
  singular3rdPerson: Word('проталкивается', 4),
  plural1stPerson: Word('проталкиваемся', 4),
  plural2ndPerson: Word('проталкиваетесь', 4),
  plural3rdPerson: Word('проталкиваются', 4),
  masculinePast: Word('проталкивался', 4),
  femininePast: Word('проталкивалась', 4),
  neuterPast: Word('проталкивалось', 4),
  pluralPast: Word('проталкивались', 4),
  imperativeInformal: Word('проталкивайся', 4),
  imperativeFormal: Word('проталкивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(проталкиваться.name.text, проталкиваться);

export { проталкиваться };