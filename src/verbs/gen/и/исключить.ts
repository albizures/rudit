import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исключить: PerfectVerb = {
  name: Word('исключить', 6),
  singular1stPerson: Word('исключу', 6),
  singular2ndPerson: Word('исключишь', 6),
  singular3rdPerson: Word('исключит', 6),
  plural1stPerson: Word('исключим', 6),
  plural2ndPerson: Word('исключите', 6),
  plural3rdPerson: Word('исключат', 6),
  masculinePast: Word('исключил', 6),
  femininePast: Word('исключила', 6),
  neuterPast: Word('исключило', 6),
  pluralPast: Word('исключили', 6),
  imperativeInformal: Word('исключи', 6),
  imperativeFormal: Word('исключите', 6),
  imperfect: ['исключать'],
};

perfectVerbs.set(исключить.name.text, исключить);

export { исключить };