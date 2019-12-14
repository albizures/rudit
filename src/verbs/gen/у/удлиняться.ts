import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удлиняться: PerfectVerb = {
  name: Word('удлиняться', 5),
  singular1stPerson: Word('удлиняюсь', 5),
  singular2ndPerson: Word('удлиняешься', 5),
  singular3rdPerson: Word('удлиняется', 5),
  plural1stPerson: Word('удлиняемся', 5),
  plural2ndPerson: Word('удлиняетесь', 5),
  plural3rdPerson: Word('удлиняются', 5),
  masculinePast: Word('удлинялся', 5),
  femininePast: Word('удлинялась', 5),
  neuterPast: Word('удлинялось', 5),
  pluralPast: Word('удлинялись', 5),
  imperativeInformal: Word('удлиняйся', 5),
  imperativeFormal: Word('удлиняйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(удлиняться.name.text, удлиняться);

export { удлиняться };