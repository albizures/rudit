import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удваиваться: PerfectVerb = {
  name: Word('удваиваться', 3),
  singular1stPerson: Word('удваиваюсь', 3),
  singular2ndPerson: Word('удваиваешься', 3),
  singular3rdPerson: Word('удваивается', 3),
  plural1stPerson: Word('удваиваемся', 3),
  plural2ndPerson: Word('удваиваетесь', 3),
  plural3rdPerson: Word('удваиваются', 3),
  masculinePast: Word('удваивался', 3),
  femininePast: Word('удваивалась', 3),
  neuterPast: Word('удваивалось', 3),
  pluralPast: Word('удваивались', 3),
  imperativeInformal: Word('удваивайся', 3),
  imperativeFormal: Word('удваивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(удваиваться.name.text, удваиваться);

export { удваиваться };