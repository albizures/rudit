import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перескочить: PerfectVerb = {
  name: Word('перескочить', 8),
  singular1stPerson: Word('перескочу', 8),
  singular2ndPerson: Word('перескочишь', 6),
  singular3rdPerson: Word('перескочит', 6),
  plural1stPerson: Word('перескочим', 6),
  plural2ndPerson: Word('перескочите', 6),
  plural3rdPerson: Word('перескочат', 6),
  masculinePast: Word('перескочил', 8),
  femininePast: Word('перескочила', 8),
  neuterPast: Word('перескочило', 8),
  pluralPast: Word('перескочили', 8),
  imperativeInformal: Word('перескочи', 8),
  imperativeFormal: Word('перескочите', 8),
  imperfect: [],
};

perfectVerbs.set(перескочить.name.text, перескочить);

export { перескочить };