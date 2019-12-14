import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наездиться: PerfectVerb = {
  name: Word('наездиться', 2),
  singular1stPerson: Word('наезжусь', 2),
  singular2ndPerson: Word('наездишься', 2),
  singular3rdPerson: Word('наездится', 2),
  plural1stPerson: Word('наездимся', 2),
  plural2ndPerson: Word('наездитесь', 2),
  plural3rdPerson: Word('наездятся', 2),
  masculinePast: Word('наездился', 2),
  femininePast: Word('наездилась', 2),
  neuterPast: Word('наездилось', 2),
  pluralPast: Word('наездились', 2),
  imperativeInformal: Word('наездись', 2),
  imperativeFormal: Word('наездитесь', 2),
  imperfect: [],
};

perfectVerbs.set(наездиться.name.text, наездиться);

export { наездиться };