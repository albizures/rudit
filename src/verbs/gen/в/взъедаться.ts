import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взъедаться: PerfectVerb = {
  name: Word('взъедаться', 5),
  singular1stPerson: Word('взъедаюсь', 5),
  singular2ndPerson: Word('взъедаешься', 5),
  singular3rdPerson: Word('взъедается', 5),
  plural1stPerson: Word('взъедаемся', 5),
  plural2ndPerson: Word('взъедаетесь', 5),
  plural3rdPerson: Word('взъедаются', 5),
  masculinePast: Word('взъедался', 5),
  femininePast: Word('взъедалась', 5),
  neuterPast: Word('взъедалось', 5),
  pluralPast: Word('взъедались', 5),
  imperativeInformal: Word('взъедайся', 5),
  imperativeFormal: Word('взъедайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(взъедаться.name.text, взъедаться);

export { взъедаться };