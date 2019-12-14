import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облесить: PerfectVerb = {
  name: Word('облесить', 5),
  singular1stPerson: Word('облешу', 5),
  singular2ndPerson: Word('облесишь', 5),
  singular3rdPerson: Word('облесит', 5),
  plural1stPerson: Word('облесим', 5),
  plural2ndPerson: Word('облесите', 5),
  plural3rdPerson: Word('облесят', 5),
  masculinePast: Word('облесил', 5),
  femininePast: Word('облесила', 5),
  neuterPast: Word('облесило', 5),
  pluralPast: Word('облесили', 5),
  imperativeInformal: Word('облеси', 5),
  imperativeFormal: Word('облесите', 5),
  imperfect: [],
};

perfectVerbs.set(облесить.name.text, облесить);

export { облесить };