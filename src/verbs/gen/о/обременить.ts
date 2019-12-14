import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обременить: PerfectVerb = {
  name: Word('обременить', 7),
  singular1stPerson: Word('обременю', 7),
  singular2ndPerson: Word('обременишь', 7),
  singular3rdPerson: Word('обременит', 7),
  plural1stPerson: Word('обременим', 7),
  plural2ndPerson: Word('обремените', 7),
  plural3rdPerson: Word('обременят', 7),
  masculinePast: Word('обременил', 7),
  femininePast: Word('обременила', 7),
  neuterPast: Word('обременило', 7),
  pluralPast: Word('обременили', 7),
  imperativeInformal: Word('обремени', 7),
  imperativeFormal: Word('обремените', 7),
  imperfect: [],
};

perfectVerbs.set(обременить.name.text, обременить);

export { обременить };