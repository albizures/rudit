import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щериться: PerfectVerb = {
  name: Word('щериться', 1),
  singular1stPerson: Word('щерюсь', 1),
  singular2ndPerson: Word('щеришься', 1),
  singular3rdPerson: Word('щерится', 1),
  plural1stPerson: Word('щеримся', 1),
  plural2ndPerson: Word('щеритесь', 1),
  plural3rdPerson: Word('щерятся', 1),
  masculinePast: Word('щерился', 1),
  femininePast: Word('щерилась', 1),
  neuterPast: Word('щерилось', 1),
  pluralPast: Word('щерились', 1),
  imperativeInformal: Word('щерься', 1),
  imperativeFormal: Word('щерьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(щериться.name.text, щериться);

export { щериться };