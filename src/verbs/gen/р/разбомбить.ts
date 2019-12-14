import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбомбить: PerfectVerb = {
  name: Word('разбомбить', 7),
  singular1stPerson: Word('разбомблю', 8),
  singular2ndPerson: Word('разбомбишь', 7),
  singular3rdPerson: Word('разбомбит', 7),
  plural1stPerson: Word('разбомбим', 7),
  plural2ndPerson: Word('разбомбите', 7),
  plural3rdPerson: Word('разбомбят', 7),
  masculinePast: Word('разбомбил', 7),
  femininePast: Word('разбомбила', 7),
  neuterPast: Word('разбомбило', 7),
  pluralPast: Word('разбомбили', 7),
  imperativeInformal: Word('разбомби', 7),
  imperativeFormal: Word('разбомбите', 7),
  imperfect: [],
};

perfectVerbs.set(разбомбить.name.text, разбомбить);

export { разбомбить };