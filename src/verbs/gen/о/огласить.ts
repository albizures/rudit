import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огласить: PerfectVerb = {
  name: Word('огласить', 5),
  singular1stPerson: Word('оглашу', 5),
  singular2ndPerson: Word('огласишь', 5),
  singular3rdPerson: Word('огласит', 5),
  plural1stPerson: Word('огласим', 5),
  plural2ndPerson: Word('огласите', 5),
  plural3rdPerson: Word('огласят', 5),
  masculinePast: Word('огласил', 5),
  femininePast: Word('огласила', 5),
  neuterPast: Word('огласило', 5),
  pluralPast: Word('огласили', 5),
  imperativeInformal: Word('огласи', 5),
  imperativeFormal: Word('огласите', 5),
  imperfect: ['оглашать'],
};

perfectVerbs.set(огласить.name.text, огласить);

export { огласить };