import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплотиться: PerfectVerb = {
  name: Word('сплотиться', 5),
  singular1stPerson: Word('сплочусь', 5),
  singular2ndPerson: Word('сплотишься', 5),
  singular3rdPerson: Word('сплотится', 5),
  plural1stPerson: Word('сплотимся', 5),
  plural2ndPerson: Word('сплотитесь', 5),
  plural3rdPerson: Word('сплотятся', 5),
  masculinePast: Word('сплотился', 5),
  femininePast: Word('сплотилась', 5),
  neuterPast: Word('сплотилось', 5),
  pluralPast: Word('сплотились', 5),
  imperativeInformal: Word('сплотись', 5),
  imperativeFormal: Word('сплотитесь', 5),
  imperfect: [],
};

perfectVerbs.set(сплотиться.name.text, сплотиться);

export { сплотиться };