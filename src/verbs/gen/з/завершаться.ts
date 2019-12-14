import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завершаться: PerfectVerb = {
  name: Word('завершаться', 6),
  singular1stPerson: Word('завершаюсь', 6),
  singular2ndPerson: Word('завершаешься', 6),
  singular3rdPerson: Word('завершается', 6),
  plural1stPerson: Word('завершаемся', 6),
  plural2ndPerson: Word('завершаетесь', 6),
  plural3rdPerson: Word('завершаются', 6),
  masculinePast: Word('завершался', 6),
  femininePast: Word('завершалась', 6),
  neuterPast: Word('завершалось', 6),
  pluralPast: Word('завершались', 6),
  imperativeInformal: Word('завершайся', 6),
  imperativeFormal: Word('завершайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(завершаться.name.text, завершаться);

export { завершаться };