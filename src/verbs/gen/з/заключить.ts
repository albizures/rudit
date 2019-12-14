import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заключить: PerfectVerb = {
  name: Word('заключить', 6),
  singular1stPerson: Word('заключу', 6),
  singular2ndPerson: Word('заключишь', 6),
  singular3rdPerson: Word('заключит', 6),
  plural1stPerson: Word('заключим', 6),
  plural2ndPerson: Word('заключите', 6),
  plural3rdPerson: Word('заключат', 6),
  masculinePast: Word('заключил', 6),
  femininePast: Word('заключила', 6),
  neuterPast: Word('заключило', 6),
  pluralPast: Word('заключили', 6),
  imperativeInformal: Word('заключи', 6),
  imperativeFormal: Word('заключите', 6),
  imperfect: ['заключать'],
};

perfectVerbs.set(заключить.name.text, заключить);

export { заключить };