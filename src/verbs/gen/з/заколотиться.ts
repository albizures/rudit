import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заколотиться: PerfectVerb = {
  name: Word('заколотиться', 7),
  singular1stPerson: Word('заколочусь', 7),
  singular2ndPerson: Word('заколотишься', 5),
  singular3rdPerson: Word('заколотится', 5),
  plural1stPerson: Word('заколотимся', 5),
  plural2ndPerson: Word('заколотитесь', 5),
  plural3rdPerson: Word('заколотятся', 5),
  masculinePast: Word('заколотился', 7),
  femininePast: Word('заколотилась', 7),
  neuterPast: Word('заколотилось', 7),
  pluralPast: Word('заколотились', 7),
  imperativeInformal: Word('заколотись', 7),
  imperativeFormal: Word('заколотитесь', 7),
  imperfect: [],
};

perfectVerbs.set(заколотиться.name.text, заколотиться);

export { заколотиться };