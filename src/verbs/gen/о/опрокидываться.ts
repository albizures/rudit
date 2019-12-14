import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опрокидываться: PerfectVerb = {
  name: Word('опрокидываться', 5),
  singular1stPerson: Word('опрокидываюсь', 5),
  singular2ndPerson: Word('опрокидываешься', 5),
  singular3rdPerson: Word('опрокидывается', 5),
  plural1stPerson: Word('опрокидываемся', 5),
  plural2ndPerson: Word('опрокидываетесь', 5),
  plural3rdPerson: Word('опрокидываются', 5),
  masculinePast: Word('опрокидывался', 5),
  femininePast: Word('опрокидывалась', 5),
  neuterPast: Word('опрокидывалось', 5),
  pluralPast: Word('опрокидывались', 5),
  imperativeInformal: Word('опрокидывайся', 5),
  imperativeFormal: Word('опрокидывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(опрокидываться.name.text, опрокидываться);

export { опрокидываться };