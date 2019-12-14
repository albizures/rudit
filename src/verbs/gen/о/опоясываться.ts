import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опоясываться: PerfectVerb = {
  name: Word('опоясываться', 3),
  singular1stPerson: Word('опоясываюсь', 3),
  singular2ndPerson: Word('опоясываешься', 3),
  singular3rdPerson: Word('опоясывается', 3),
  plural1stPerson: Word('опоясываемся', 3),
  plural2ndPerson: Word('опоясываетесь', 3),
  plural3rdPerson: Word('опоясываются', 3),
  masculinePast: Word('опоясывался', 3),
  femininePast: Word('опоясывалась', 3),
  neuterPast: Word('опоясывалось', 3),
  pluralPast: Word('опоясывались', 3),
  imperativeInformal: Word('опоясывайся', 3),
  imperativeFormal: Word('опоясывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(опоясываться.name.text, опоясываться);

export { опоясываться };