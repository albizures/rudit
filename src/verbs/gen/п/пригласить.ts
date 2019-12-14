import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригласить: PerfectVerb = {
  name: Word('пригласить', 7),
  singular1stPerson: Word('приглашу', 7),
  singular2ndPerson: Word('пригласишь', 7),
  singular3rdPerson: Word('пригласит', 7),
  plural1stPerson: Word('пригласим', 7),
  plural2ndPerson: Word('пригласите', 7),
  plural3rdPerson: Word('пригласят', 7),
  masculinePast: Word('пригласил', 7),
  femininePast: Word('пригласила', 7),
  neuterPast: Word('пригласило', 7),
  pluralPast: Word('пригласили', 7),
  imperativeInformal: Word('пригласи', 7),
  imperativeFormal: Word('пригласите', 7),
  imperfect: ['приглашать'],
};

perfectVerbs.set(пригласить.name.text, пригласить);

export { пригласить };