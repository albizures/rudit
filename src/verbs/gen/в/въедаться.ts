import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const въедаться: PerfectVerb = {
  name: Word('въедаться', 4),
  singular1stPerson: Word('въедаюсь', 4),
  singular2ndPerson: Word('въедаешься', 4),
  singular3rdPerson: Word('въедается', 4),
  plural1stPerson: Word('въедаемся', 4),
  plural2ndPerson: Word('въедаетесь', 4),
  plural3rdPerson: Word('въедаются', 4),
  masculinePast: Word('въедался', 4),
  femininePast: Word('въедалась', 4),
  neuterPast: Word('въедалось', 4),
  pluralPast: Word('въедались', 4),
  imperativeInformal: Word('въедайся', 4),
  imperativeFormal: Word('въедайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(въедаться.name.text, въедаться);

export { въедаться };