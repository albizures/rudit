import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепортить: PerfectVerb = {
  name: Word('перепортить', 5),
  singular1stPerson: Word('перепорчу', 5),
  singular2ndPerson: Word('перепортишь', 5),
  singular3rdPerson: Word('перепортит', 5),
  plural1stPerson: Word('перепортим', 5),
  plural2ndPerson: Word('перепортите', 5),
  plural3rdPerson: Word('перепортят', 5),
  masculinePast: Word('перепортил', 5),
  femininePast: Word('перепортила', 5),
  neuterPast: Word('перепортило', 5),
  pluralPast: Word('перепортили', 5),
  imperativeInformal: Word('перепорти//перепо'рть', 5),
  imperativeFormal: Word('перепортите//перепо'ртьте', 5),
  imperfect: [],
};

perfectVerbs.set(перепортить.name.text, перепортить);

export { перепортить };