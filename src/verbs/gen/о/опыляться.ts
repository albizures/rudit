import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опыляться: PerfectVerb = {
  name: Word('опыляться', 4),
  singular1stPerson: Word('опыляюсь', 4),
  singular2ndPerson: Word('опыляешься', 4),
  singular3rdPerson: Word('опыляется', 4),
  plural1stPerson: Word('опыляемся', 4),
  plural2ndPerson: Word('опыляетесь', 4),
  plural3rdPerson: Word('опыляются', 4),
  masculinePast: Word('опылялся', 4),
  femininePast: Word('опылялась', 4),
  neuterPast: Word('опылялось', 4),
  pluralPast: Word('опылялись', 4),
  imperativeInformal: Word('опыляйся', 4),
  imperativeFormal: Word('опыляйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(опыляться.name.text, опыляться);

export { опыляться };