import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восхитить: PerfectVerb = {
  name: Word('восхитить', 6),
  singular1stPerson: Word('восхищу', 6),
  singular2ndPerson: Word('восхитишь', 6),
  singular3rdPerson: Word('восхитит', 6),
  plural1stPerson: Word('восхитим', 6),
  plural2ndPerson: Word('восхитите', 6),
  plural3rdPerson: Word('восхитят', 6),
  masculinePast: Word('восхитил', 6),
  femininePast: Word('восхитила', 6),
  neuterPast: Word('восхитило', 6),
  pluralPast: Word('восхитили', 6),
  imperativeInformal: Word('восхити', 6),
  imperativeFormal: Word('восхитите', 6),
  imperfect: [],
};

perfectVerbs.set(восхитить.name.text, восхитить);

export { восхитить };