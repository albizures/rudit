import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевозить: PerfectVerb = {
  name: Word('перевозить', 7),
  singular1stPerson: Word('перевожу', 7),
  singular2ndPerson: Word('перевозишь', 5),
  singular3rdPerson: Word('перевозит', 5),
  plural1stPerson: Word('перевозим', 5),
  plural2ndPerson: Word('перевозите', 5),
  plural3rdPerson: Word('перевозят', 5),
  masculinePast: Word('перевозил', 7),
  femininePast: Word('перевозила', 7),
  neuterPast: Word('перевозило', 7),
  pluralPast: Word('перевозили', 7),
  imperativeInformal: Word('перевози', 7),
  imperativeFormal: Word('перевозите', 7),
  imperfect: [],
};

perfectVerbs.set(перевозить.name.text, перевозить);

export { перевозить };