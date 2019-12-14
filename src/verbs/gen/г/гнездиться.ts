import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гнездиться: PerfectVerb = {
  name: Word('гнездиться', 5),
  singular1stPerson: Word('гнезжусь', 5),
  singular2ndPerson: Word('гнездишься', 5),
  singular3rdPerson: Word('гнездится', 5),
  plural1stPerson: Word('гнездимся', 5),
  plural2ndPerson: Word('гнездитесь', 5),
  plural3rdPerson: Word('гнездятся', 5),
  masculinePast: Word('гнездился', 5),
  femininePast: Word('гнездилась', 5),
  neuterPast: Word('гнездилось', 5),
  pluralPast: Word('гнездились', 5),
  imperativeInformal: Word('гнездись', 5),
  imperativeFormal: Word('гнездитесь', 5),
  imperfect: [],
};

perfectVerbs.set(гнездиться.name.text, гнездиться);

export { гнездиться };