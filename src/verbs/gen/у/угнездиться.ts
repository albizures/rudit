import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угнездиться: PerfectVerb = {
  name: Word('угнездиться', 6),
  singular1stPerson: Word('угнезжусь', 6),
  singular2ndPerson: Word('угнездишься', 6),
  singular3rdPerson: Word('угнездится', 6),
  plural1stPerson: Word('угнездимся', 6),
  plural2ndPerson: Word('угнездитесь', 6),
  plural3rdPerson: Word('угнездятся', 6),
  masculinePast: Word('угнездился', 6),
  femininePast: Word('угнездилась', 6),
  neuterPast: Word('угнездилось', 6),
  pluralPast: Word('угнездились', 6),
  imperativeInformal: Word('угнездись', 6),
  imperativeFormal: Word('угнездитесь', 6),
  imperfect: [],
};

perfectVerbs.set(угнездиться.name.text, угнездиться);

export { угнездиться };