import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отъедаться: PerfectVerb = {
  name: Word('отъедаться', 5),
  singular1stPerson: Word('отъедаюсь', 5),
  singular2ndPerson: Word('отъедаешься', 5),
  singular3rdPerson: Word('отъедается', 5),
  plural1stPerson: Word('отъедаемся', 5),
  plural2ndPerson: Word('отъедаетесь', 5),
  plural3rdPerson: Word('отъедаются', 5),
  masculinePast: Word('отъедался', 5),
  femininePast: Word('отъедалась', 5),
  neuterPast: Word('отъедалось', 5),
  pluralPast: Word('отъедались', 5),
  imperativeInformal: Word('отъедайся', 5),
  imperativeFormal: Word('отъедайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отъедаться.name.text, отъедаться);

export { отъедаться };