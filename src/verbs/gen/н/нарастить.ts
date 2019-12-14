import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарастить: PerfectVerb = {
  name: Word('нарастить', 6),
  singular1stPerson: Word('наращу', 5),
  singular2ndPerson: Word('нарастишь', 6),
  singular3rdPerson: Word('нарастит', 6),
  plural1stPerson: Word('нарастим', 6),
  plural2ndPerson: Word('нарастите', 6),
  plural3rdPerson: Word('нарастят', 6),
  masculinePast: Word('нарастил', 6),
  femininePast: Word('нарастила', 6),
  neuterPast: Word('нарастило', 6),
  pluralPast: Word('нарастили', 6),
  imperativeInformal: Word('нарасти', 6),
  imperativeFormal: Word('нарастите', 6),
  imperfect: ['наращивать'],
};

perfectVerbs.set(нарастить.name.text, нарастить);

export { нарастить };