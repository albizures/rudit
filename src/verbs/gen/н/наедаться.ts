import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наедаться: PerfectVerb = {
  name: Word('наедаться', 4),
  singular1stPerson: Word('наедаюсь', 4),
  singular2ndPerson: Word('наедаешься', 4),
  singular3rdPerson: Word('наедается', 4),
  plural1stPerson: Word('наедаемся', 4),
  plural2ndPerson: Word('наедаетесь', 4),
  plural3rdPerson: Word('наедаются', 4),
  masculinePast: Word('наедался', 4),
  femininePast: Word('наедалась', 4),
  neuterPast: Word('наедалось', 4),
  pluralPast: Word('наедались', 4),
  imperativeInformal: Word('наедайся', 4),
  imperativeFormal: Word('наедайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(наедаться.name.text, наедаться);

export { наедаться };