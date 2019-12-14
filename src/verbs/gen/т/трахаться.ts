import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трахаться: PerfectVerb = {
  name: Word('трахаться', 2),
  singular1stPerson: Word('трахаюсь', 2),
  singular2ndPerson: Word('трахаешься', 2),
  singular3rdPerson: Word('трахается', 2),
  plural1stPerson: Word('трахаемся', 2),
  plural2ndPerson: Word('трахаетесь', 2),
  plural3rdPerson: Word('трахаются', 2),
  masculinePast: Word('трахался', 2),
  femininePast: Word('трахалась', 2),
  neuterPast: Word('трахалось', 2),
  pluralPast: Word('трахались', 2),
  imperativeInformal: Word('трахайся', 2),
  imperativeFormal: Word('трахайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(трахаться.name.text, трахаться);

export { трахаться };