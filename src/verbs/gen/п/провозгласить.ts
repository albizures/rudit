import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провозгласить: PerfectVerb = {
  name: Word('провозгласить', 10),
  singular1stPerson: Word('провозглашу', 10),
  singular2ndPerson: Word('провозгласишь', 10),
  singular3rdPerson: Word('провозгласит', 10),
  plural1stPerson: Word('провозгласим', 10),
  plural2ndPerson: Word('провозгласите', 10),
  plural3rdPerson: Word('провозгласят', 10),
  masculinePast: Word('провозгласил', 10),
  femininePast: Word('провозгласила', 10),
  neuterPast: Word('провозгласило', 10),
  pluralPast: Word('провозгласили', 10),
  imperativeInformal: Word('провозгласи', 10),
  imperativeFormal: Word('провозгласите', 10),
  imperfect: ['провозглашать'],
};

perfectVerbs.set(провозгласить.name.text, провозгласить);

export { провозгласить };