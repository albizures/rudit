import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опохмеляться: PerfectVerb = {
  name: Word('опохмеляться', 7),
  singular1stPerson: Word('опохмеляюсь', 7),
  singular2ndPerson: Word('опохмеляешься', 7),
  singular3rdPerson: Word('опохмеляется', 7),
  plural1stPerson: Word('опохмеляемся', 7),
  plural2ndPerson: Word('опохмеляетесь', 7),
  plural3rdPerson: Word('опохмеляются', 7),
  masculinePast: Word('опохмелялся', 7),
  femininePast: Word('опохмелялась', 7),
  neuterPast: Word('опохмелялось', 7),
  pluralPast: Word('опохмелялись', 7),
  imperativeInformal: Word('опохмеляйся', 7),
  imperativeFormal: Word('опохмеляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(опохмеляться.name.text, опохмеляться);

export { опохмеляться };